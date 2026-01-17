import { OrderForm } from "@/components/order/OrderForm";

export default function OrderPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-green-400 to-neon-cyan mb-4">
                        Initialize Order
                    </h1>
                    <p className="text-xl text-gray-400">
                        Secure your neon treats for pickup or delivery.
                    </p>
                </div>

                <OrderForm />
            </div>
        </div>
    );
}
