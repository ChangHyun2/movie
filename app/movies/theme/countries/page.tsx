import { redirect } from "next/navigation";
import { countries } from "@/data/ui";

export default function () {
  redirect(`/movies/theme/countries/${countries[0].id}`);
}
