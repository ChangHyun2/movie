import { redirect } from "next/navigation";
import { cities } from "@/data/ui";

export default function () {
  redirect(`/movies/theme/cities/${cities[0].id}`);
}
