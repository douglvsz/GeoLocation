import ModelLocation from "../model/model.js";

export default new class LocationControllers{
    
    async saveLocation(req, res){
        try{
        const get = new ModelLocation(req.body);
        const save = await get.getLocation();
        res.json(save)
    }catch(e){
        console.log(e)
        };
    };
};