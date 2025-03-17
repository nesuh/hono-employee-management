import { Hono } from "hono";
import { PositionController } from "../controller/position.controller";

const  positionRoutes = new Hono();

// A. Insert a New Employee Position/Role 
positionRoutes.post('/positions', PositionController.createPosition);

positionRoutes.get('/positions', PositionController.getAllPositions);

// C. Get a Single Position/Role Detail 
positionRoutes.get('/positions/:id', PositionController.getPositionById);

//B. Update an Existing Position/Role
positionRoutes.put('/positions/:id', PositionController.updatePosition);

// F. Remove a Position/Role
positionRoutes.delete('/positions/:id', PositionController.deletePosition);

// D. Get All Positions in Hierarchical Tree Format
// Endpoint: GET /positions/tree

positionRoutes.get('/positions/tree',PositionController.getAllPositionHierarchyTree);

// E. Get All Children of a Specific Position/Role
// Endpoint: GET /positions/:id/children

positionRoutes.get('/positions/:id/children', PositionController.getAllChildrenOfPosition);



// make for future 
// getHierarchyUpwards
export default positionRoutes;

