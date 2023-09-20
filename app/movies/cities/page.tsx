import { redirect } from "next/navigation";
import { cities } from "@/data/ui";

export default function () {
  redirect(`/movies/cities/${cities[0].id}`);
}
