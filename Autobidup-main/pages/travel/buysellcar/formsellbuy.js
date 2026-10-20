const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    // Compress images before upload
    const compressedImages = await Promise.all(
      Object.values(images).map(async (file) => {
        if (!file) return null;
        
        // Create a canvas for compression
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Create an image element
        const img = new Image();
        await new Promise((resolve) => {
          img.onload = resolve;
          img.src = URL.createObjectURL(file);
        });
        
        // Set maximum dimensions
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;
        
        // Calculate new dimensions
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        
        // Set canvas dimensions and draw image
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to blob with reduced quality
        return new Promise((resolve) => {
          canvas.toBlob(
            (blob) => {
              resolve(new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              }));
            },
            'image/jpeg',
            0.7 // 70% quality
          );
        });
      })
    );

    // Filter out null values and create FormData
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('year', year);
    formData.append('mileage', mileage);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('transmission', transmission);
    formData.append('fuelType', fuelType);
    formData.append('condition', condition);
    formData.append('color', color);
    formData.append('engineCapacity', engineCapacity);
    formData.append('registrationCity', registrationCity);
    formData.append('assembly', assembly);
    formData.append('features', JSON.stringify(features));
    formData.append('contactNumber', contactNumber);
    formData.append('contactEmail', contactEmail);

    // Append compressed images
    compressedImages.forEach((file, index) => {
      if (file) {
        formData.append('images', file);
      }
    });

    console.log('Submitting form data:', {
      name,
      price,
      year,
      mileage,
      location,
      description,
      category,
      transmission,
      fuelType,
      condition,
      color,
      engineCapacity,
      registrationCity,
      assembly,
      features,
      contactNumber,
      contactEmail,
      imageCount: compressedImages.filter(Boolean).length
    });

    const response = await fetch('https://autobidup.pythonanywhere.com/cars/create', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success! Response:', data);
    
    // Show success message
    setSuccess('Car ad created successfully!');
    
    // Reset form
    resetForm();
    
    // Redirect after a short delay
    setTimeout(() => {
      router.push('/travel/buysellcar/usedcars');
    }, 2000);

  } catch (error) {
    console.error('Error submitting form:', error);
    setError(error.message || 'Failed to create car ad. Please try again.');
  } finally {
    setLoading(false);
  }
}; 