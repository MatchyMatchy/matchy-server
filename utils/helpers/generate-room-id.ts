import { getRandomNumber } from "./generate-random-number";

export const generate_room_id = () => {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  const alpha_numeric = alpha.concat(numbers);

  let id = "";

  for (let i = 0; i < 6; i++) {
    const random_number = getRandomNumber(0, alpha_numeric.length - 1, true);

    id += alpha_numeric[random_number];
  }

  return id.toUpperCase();
};
