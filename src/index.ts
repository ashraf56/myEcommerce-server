import mongoose from "mongoose";
import app from "./app";
import config from "./app/config/config";


async function main() {
    
try {
    await mongoose.connect(`${config.dbs}`);
    app.listen(config.port,()=>{
        console.log(`app is listening on the port ${config.port}`);
        
    })
} catch (error) {
    console.log(error);
    
}

}

main()