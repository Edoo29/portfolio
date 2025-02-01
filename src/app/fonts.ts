import { Roboto, Roboto_Condensed, Roboto_Slab } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const robotoConsended = Roboto_Condensed({ weight: "400", subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ weight: "400", subsets: ["latin"] });

export { roboto, robotoConsended, robotoSlab };
