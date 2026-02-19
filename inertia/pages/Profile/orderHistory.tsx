import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface Order {
  id: number | string;
  date: string;
  total: string;
  status: string;
}

interface OrderHistoryProps {
  orders: Order[];
}

export default function OrderHistory({ orders }: OrderHistoryProps) {
  return (
    <div>
      <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
        <Clock size={18} />
        Order History
      </h3>

      <div className="space-y-3">
        {orders.map((order) => (
          <Card key={order.id} className="rounded-xl shadow-sm">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{order.id}</p>
                <p className="text-xs text-gray-500">{order.date}</p>
              </div>

              <div className="text-right">
                <p className="font-semibold">{order.total}</p>
                <span className="text-xs text-green-600">
                  {order.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
