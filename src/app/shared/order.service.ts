import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderCount: Number;
  selectedOrder: Order;
  orders: Order[];
  AcptOrders: Order[];

  readonly baseURL = 'http://localhost:3000/orders';
  readonly baseCN = 'http://localhost:3000/orders/reqe';
  readonly baseCA = 'http://localhost:3000/orders/acpt';
  readonly baseC = 'http://localhost:3000/orders/count';

  constructor(private http: HttpClient) { }

  postOrder(ord: Order) {
    return this.http.post(this.baseURL, ord);
  }

  getOrderList() {
    return this.http.get(this.baseURL);
  }
  getReqOrderList() {
    return this.http.get(this.baseCN);
  }
  getAcptOrderList() {
    return this.http.get(this.baseCA);
  }
  putOrder(ord: Order) {
    return this.http.put(this.baseURL + `/${ord._id}`, ord);
  }
  deleteOrder(_id: String) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  getOrderCount() {
    return this.orderCount;
  }

  setOrderCount() {
    this.http.get(this.baseC).subscribe((result: any) => {
      this.orderCount = result.count;
    }, (err) => { console.log(err) });
  }

}
