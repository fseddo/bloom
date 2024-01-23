import { Flower } from "./models/Flower";
import { FlowerOrder } from "./models/FlowerOrder";
import { Order } from "./models/Order";


Order.belongsToMany(Flower, { through: FlowerOrder });
Flower.belongsToMany(Order, { through: FlowerOrder });
