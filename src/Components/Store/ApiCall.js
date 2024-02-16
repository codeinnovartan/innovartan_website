export const getSchoolState = async () => {
  const response = await fetch(
    "http://qa.edvanz.com/api/mobile/nep/get-school-state"
  );
  const data = await response.json();
  return data.data.states;
};

export const getSchoolCity = async (state) => {
  const response = await fetch(
    "http://qa.edvanz.com/api/mobile/nep/get-cities-by-state",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: state,
      }),
    }
  );
  const data = await response.json();
  return data.data.cities;
};

export const getSchools = async (state, city) => {
  const response = await fetch(
    "http://qa.edvanz.com/api/mobile/nep/get-school-by-city",
    {
      method: "POST",
      headers: {
        "Content-Type": "appilication/json",
      },
      body: JSON.stringify({
        city,
        state,
      }),
    }
  );
  const data = await response.json();
  return data.data.school_list;
};

export const sendContactUs = async (formData) => {
  const response = await fetch(
    "http://qa.edvanz.com/api/mobile/affiliation/create-web-lead",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner_name: formData.name,
        owner_number: formData.number,
        enquiry_message: formData.message,
        email: formData.email,
      })
    }
  );
  const data = await response.json();
  return data;
};
