import { redirect } from "next/navigation";

export default function HomePage() {
  redirect('dashboard/main'); //REDIRECCIONA DIRECTAMENTE A LA RUTA QUE INGRESEMOS, EN ESTE CASO AL COUNTER DEL DASHBOARD
}
