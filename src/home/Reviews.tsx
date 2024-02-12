import { Review } from "./Review";

export const Reviews = () => {
  return (
    <div className="w-2/3 gap-10 px-20 flex justify-center">
      <Review
        name="Ngoc M."
        subject="Even more stunning in real life"
        description="My friend LOVED her flowers and was in awe of them...she has been changing out the water every day so they remain beautiful and how they arrived! She sent me a photo and they were even more beautiful in person than what was on the website."
      />
      <Review
        name="Beth B."
        subject="An easy choice when sending a gift to WOW!"
        description="It’s a relief to know anytime I order Bloom that the arrangement will WOW! the recipient. The quality and the beauty of the flowers are a combination that match the price. Thank you for all that you do to move flowers from hardworking farmers to us."
      />
      <Review
        name="Donna R."
        subject="Never have I not been delighted"
        description="Each time I order from Bloom, my recipients are treated to the most amazing, fresh, artful, beautiful flowers on the planet. No other florist can compare. Delivery is on time. Thoughtful packaging ensures fresh bouquets. The flowers are sublime, and last a long time. I have been a customer since the beginning; never have I not been delighted."
      />
    </div>
  );
};
