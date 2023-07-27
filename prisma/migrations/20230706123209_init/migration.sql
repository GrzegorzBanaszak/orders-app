-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "orderData" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Good" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "description" TEXT,
    "orderId" INTEGER,

    CONSTRAINT "Good_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Good" ADD CONSTRAINT "Good_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
