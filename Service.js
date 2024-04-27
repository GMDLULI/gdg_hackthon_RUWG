// Add a business
function addBusiness(e) {
    e.preventDefault();
  
    const businessName = document.getElementById('business-name').value;
    const businessAddress = document.getElementById('business-address').value;
    const businessPhone = document.getElementById('business-phone').value;
    const businessWebsite = document.getElementById('business-website').value;
    const businessDescription = document.getElementById('business-description').value;
  
    const businessData = {
      name: businessName,
      address: businessAddress,
      phone: businessPhone,
      website: businessWebsite,
      description: businessDescription,
    };
  
    fetch('/add-business', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(businessData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Add success or error handling here
      })
      .catch(err => {
        console.error(err);
        // Add error handling here
      });
  }
  
  // Report a fake business
  function reportFakeBusiness(e) {
    e.preventDefault();
  
    const businessId = document.getElementById('business-id').value;
  
    const businessData = {
      id: businessId,
    };
  
    fetch('/report-fake-business', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(businessData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Add success or error handling here
      })
      .catch(err => {
        console.error(err);
        // Add error handling here
      });
  }
  
  // Get businesses
  function getBusinesses() {
    fetch('/get-businesses')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Populate the UI with the retrieved businesses
      })
      .catch(err => {
        console.error(err);
        // Add error handling here
      });
  }