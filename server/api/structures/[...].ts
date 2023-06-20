import { Structure } from "api_response";

export default defineEventHandler(async event => {
    const method = event.node.req.method;
    const id = event?.context?.params?._ ? parseInt(event.context.params._) : null;
    let data;

    try {
        const response = await fetch(`http://localhost:3000/api/v1/structures/${id}`, { method: method });
        data = await response.json();
    } catch (error) {
        console.error(error);
    }

    switch (method) {
        case 'GET':
            let structure: any = {};

            if (data && data as Structure) {
                let coord = data.coord.split(',');
                structure = {
                    name: data.name,
                    description: data.description,
                    address: `${data.address}, ${data.zip} ${data.city}`,
                    phone: data.phone,
                    email: data.email,
                    website: data.website,
                    timetable: data.timetable,
                    pricing: data.pricing,
                    gallery: data.gallery,
                    coord: coord,
                };
            }

            return structure;
        case 'PUT':
            return data;
        case 'DELETE':
            return data;
        default:
            return data;
    }
})