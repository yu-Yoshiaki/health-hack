import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CreateCheckout: CustomNextPage = () => {
  const router = useRouter();
  const { userId, priceId } = router.query;

  const fetchCheckoutSessionUrl = async () => {
    const endpoint = `/api/createCheckoutSession/?userId=${userId}&priceId=${priceId}`;
    const res = await fetch(endpoint);
    const { url } = await res.json();

    return url as string;
  };

  useEffect(() => {
    fetchCheckoutSessionUrl()
      .then((url) => {
        window.location.href = url;
      })
      .catch((err: any) => {
        alert(err.message);
      });
  });

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-300">
      <p className="text-white animate-spin">○</p>
    </div>
  );
};

export default CreateCheckout;
