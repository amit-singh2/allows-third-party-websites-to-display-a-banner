(function() {
    // Fetch banner data from the API
    const fetchBannerData = async () => {
        try {
            const response = await fetch('http://localhost/online-test/api/banner.php');
            const bannerData = await response.json();
            
            insertBanner(bannerData);
        } catch (error) {
            console.error('Error fetching banner data:', error);
        }
    };

    // Function to dynamically insert the banner
    const insertBanner = (bannerData) => {
        // Create a banner div element
        const bannerContainer = document.createElement('div');
        bannerContainer.style.position = 'fixed';
        bannerContainer.style.bottom = '0';
        bannerContainer.style.left = '50%';
        bannerContainer.style.transform = 'translateX(-50%)';
        bannerContainer.style.zIndex = '1000';

        // Set optional parameters for size
        const width = new URLSearchParams(window.location.search).get('width') || '300px';
        const height = new URLSearchParams(window.location.search).get('height') || '100px';

        // Create the banner image and link
        const bannerImage = document.createElement('img');
        bannerImage.src = bannerData.image_url;
        bannerImage.alt = bannerData.alt_text;
        bannerImage.style.width = width;
        bannerImage.style.height = height;
        bannerImage.style.cursor = 'pointer';

        const bannerLink = document.createElement('a');
        bannerLink.href = bannerData.link;
        bannerLink.target = '_blank';
        bannerLink.appendChild(bannerImage);

        // Append the banner to the body of the page
        bannerContainer.appendChild(bannerLink);
        document.body.appendChild(bannerContainer);
    };

    // Run the function to fetch banner data and insert the banner
    fetchBannerData();
})();
