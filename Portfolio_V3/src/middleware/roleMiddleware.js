function roleMiddleware(req, res, next) {
    const role = req.cookies["user.role"]; 
    
    if (role === "admin") {
      req.isAdmin = true;
    } else {
      req.isAdmin = false;
    }
    next();
  }
  
  export default roleMiddleware;