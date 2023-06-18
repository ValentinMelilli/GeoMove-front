import { Structure } from "api_response";

export default defineEventHandler(async event => {
    const method = event.node.req.method;
    let data;

    try {
        const response = await fetch('http://localhost:3000/api/v1/structures', { method: method });
        data = await response.json();
    } catch (error) {
        console.error(error);
    }

    switch (method) {
        case 'GET':
            let structures: any = [];

            if (data && data as Structure[] && data.length > 0) {
                data.forEach((structure: Structure) => {
                    let coord = structure.coord.split(',');
                    structures.push({
                        name: structure.name,
                        description: structure.description,
                        address: `${structure.address}, ${structure.zip} ${structure.city}`,
                        phone: structure.phone,
                        email: structure.email,
                        website: structure.website,
                        timetable: structure.timetable,
                        pricing: structure.pricing,
                        coord: coord,
                    });
                });
            }

            return structures;
        case 'POST':
            return data;
        default:
            return data;
    }
})