import JWT from 'jsonwebtoken';


const userAuth = async(req, res, next)=>{
    try{
    const authHeader = req.headers.authorization;
    if(!authHeader || authHeader.startWith('Bearer')){
        //next('Auth failed');
    }
    if(authHeader){
        const token = authHeader.split(' ')[1];
        const payload = JWT.verify(token, process.env.JWT_SECRET);
        req.user= {userId:payload.userId};
        next(); 
     }
     else{
        res.status(401).json({ error: 'Unauthorized' });
       }
     }catch(error){
        next({message: error.message});
    }
}

export default userAuth;