import { Flower } from "./db/models/Flower";
import { FlowerOrder } from "./db/models/FlowerOrder";
import { Order } from "./db/models/Order";


Order.belongsToMany(Flower, { through: FlowerOrder });
Flower.belongsToMany(Order, { through: FlowerOrder });
