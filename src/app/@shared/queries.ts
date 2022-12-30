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


const GetServiceList = () => {
  return `query {
            service_details {
              sid,
              name,
              description,
              duration,
              is_active,
              price,
              ratings,
              reviews_count,
              share_amount
            }
          }`;
};

const GetService = (serviceId: string) => {
  return `query {
            service_details(where: {sid: {_eq: "${serviceId}"}}) {
              sid,
              name,
              description,
              duration,
              is_active,
              price,
              ratings,
              reviews_count,
              share_amount
            }
          }
        `;
}

const serviceBooking = (uid: string, sid: string, sdate: string, status: string) => {
  return `mutation {
            insert_active_bookings(objects: {service_id: "${sid}", status: "${status}", user_id: "${uid}", service_date: "${sdate}"}) {
              returning {
                address
                booking_date
                booking_id
                service_date
                service_id
                status
                user_id
                vendor_id
              }
            }
          }`;
};

export {
  GetVendorsList,
  GetVendorProfiles,
  GetActiveBookings,
  GetServiceList,
  serviceBooking,
  GetService
};
