document.addEventListener('DOMContentLoaded', () => {
    const API_BASE = 'http://localhost:5000/api/v1';
    let currentToken = getCookie('token');

    // Common utility functions
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function handleApiError(response) {
        if (response.status === 401) {
            document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            window.location.href = 'login.html';
        }
        return response.json().then(err => { throw new Error(err.message) });
    }

    // Login functionality
    if (document.getElementById('login-form')) {
        document.getElementById('login-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                email: e.target.email.value,
                password: e.target.password.value
            };

            try {
                const response = await fetch(`${API_BASE}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                
                if (!response.ok) return handleApiError(response);
                
                const data = await response.json();
                document.cookie = `token=${data.access_token}; path=/`;
                window.location.href = 'index.html';
            } catch (error) {
                alert(`Login failed: ${error.message}`);
            }
        });
    }

    // Places list functionality
    if (document.getElementById('places-list')) {
        const updateAuthUI = () => {
            document.getElementById('login-link').style.display = currentToken ? 'none' : 'block';
        };

        const fetchPlaces = async () => {
            try {
                const response = await fetch(`${API_BASE}/places`, {
                    headers: { 'Authorization': `Bearer ${currentToken}` }
                });
                
                if (!response.ok) return handleApiError(response);
                
                const places = await response.json();
                const container = document.getElementById('places-list');
                container.innerHTML = places.map(place => `
                    <div class="place-card">
                        <h3>${place.name}</h3>
                        <p>Price: $${place.price_per_night}/night</p>
                        <button class="details-button" 
                                onclick="location.href='place.html?place_id=${place.id}'">
                            View Details
                        </button>
                    </div>
                `).join('');
            } catch (error) {
                alert(`Failed to load places: ${error.message}`);
            }
        };

        updateAuthUI();
        if (currentToken) fetchPlaces();
    }

    // Place details functionality
    if (document.getElementById('place-details')) {
        const urlParams = new URLSearchParams(window.location.search);
        const placeId = urlParams.get('place_id');

        const fetchPlaceDetails = async () => {
            try {
                const response = await fetch(`${API_BASE}/places/${placeId}`, {
                    headers: { 'Authorization': `Bearer ${currentToken}` }
                });
                
                if (!response.ok) return handleApiError(response);
                
                const place = await response.json();
                const container = document.getElementById('place-details');
                container.innerHTML = `
                    <div class="place-info">
                        <h2>${place.name}</h2>
                        <p>${place.description}</p>
                        <p>Price: $${place.price_per_night}/night</p>
                        <h4>Amenities:</h4>
                        <ul>${place.amenities.map(a => `<li>${a.name}</li>`).join('')}</ul>
                        <h4>Reviews:</h4>
                        ${place.reviews.map(r => `
                            <div class="review-card">
                                <p>${r.comment}</p>
                                <small>By ${r.user.first_name} - Rating: ${r.rating}/5</small>
                            </div>
                        `).join('')}
                    </div>
                `;
                
                document.getElementById('add-review-btn').style.display = currentToken ? 'block' : 'none';
            } catch (error) {
                alert(`Failed to load place details: ${error.message}`);
            }
        };

        if (placeId) fetchPlaceDetails();
    }

    // Add review functionality
    if (document.getElementById('review-form')) {
        if (!currentToken) window.location.href = 'index.html';
        
        const urlParams = new URLSearchParams(window.location.search);
        const placeId = urlParams.get('place_id');

        document.getElementById('review-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                comment: e.target.comment.value,
                rating: parseInt(e.target.rating.value)
            };

            try {
                const response = await fetch(`${API_BASE}/places/${placeId}/reviews`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${currentToken}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) return handleApiError(response);
                
                alert('Review submitted successfully!');
                window.location.href = `place.html?place_id=${placeId}`;
            } catch (error) {
                alert(`Failed to submit review: ${error.message}`);
            }
        });
    }
});
