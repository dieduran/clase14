
import { Router } from "express";

const routerInfo = new Router();

const obtenerInfo= async(req,res) => {
    res.json(
        {
            Arg: process.argv.slice(2), 
            SO: process.platform,
            Node: process.version,       
            Memoria: process.memoryUsage().rss,
            execPath: process.execPath,
            PID: process.pid, 
            ProjectFolder: process.cwd()
        }
    );
}


routerInfo.get('/', obtenerInfo);

export {routerInfo}
