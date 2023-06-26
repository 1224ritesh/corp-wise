import serviceModel from "../models/service.model.js";
import Service from "../models/service.model.js"
import createError from "../utils/createError.js"

export const createService = async (req, res, next) => {
    if (!req.isSeller)
        return next(createError(403, "Only sellers can create a service"));

    const newService = new Service({
        userId: req.userId,
        ...req.body,
    });

    try {
        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (err) {
        next(err);
    }
}


export const deleteService = async (req, res, next) => {
    try {
        const service = await Service.findById(req.params.id);
        if (service.userId !== req.userId)
            return next(createError(403, "You can delete only your services"));

        await Service.findByIdAndDelete(req.params.id);
        res.status(200).send("Service has been deleted");

    } catch (err) {
        next(err);
    }
}
export const getService = async (req, res, next) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service)
            return next(createError(404, "Service not found"));
        res.status(200).send(service);
    } catch (err) {
        next(err);
    }
}
export const getServices = async (req, res, next) => {
    // for searching the services by category
    const query = req.query;

    const filters = {
        //     ...(query.userId && { userId: query.userId }),
        //     ...(query.cat && { cat: query.cat }),
        //     $and:[
        //         {...(query.min && { price:{$gte: parseInt(query.min)} })}, 
        //         {...(query.max && { price:{$lte: parseInt(query.max)} })}
        //     ],
        //     ...(query.search && { title: { $regex: query.search, $options: "i" } }),
        // }
        // // console.log(filters)

        ...(query.userId && { userId: q.userId }),
        ...(query.cat && { cat: query.cat }),
        ...((query.min || query.max) && {
            price: {
                ...(query.min && { $gte: query.min }),
                ...(query.max && { $lte: query.max }),
            },
        }),
        ...(query.search && { title: { $regex: query.search, $options: "i" } }),
    };
    try {
        const services = await Service.find(filters).sort({ [query.sort]: -1 });
        res.status(200).send(services);


    } catch (err) {
        console.log(err)
        next(err);
    }
}