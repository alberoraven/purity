const GetVendorsList = (emailId: any) => {
  return `query{
    vendors_list(where: {email: {_eq: "${emailId}"}}){
      email
    }}`;
};

const GetVendorProfiles = (userId: any) => {
  return `query{
    vendor_profiles(where: {
      _and: [
          {user_id: {_eq: "${userId}"}},
          {is_profile_completed: {_eq: true}}
        ]
    }){
         name
    }}`;
};

const GetActiveBookings = (vendorId: any) => {
  return `query{
    active_bookings(where: {
      _and: [
          {vendor_id: {_eq: "${vendorId}"}},
          {status: {_eq: 1}}
        ]
    }) {
      booking_date
      status
      user_id
      service_id
      service_date
      booking_status {
        status_id
        name
      }
    }}`;
};

export {
  GetVendorsList,
  GetVendorProfiles,
  GetActiveBookings
};
