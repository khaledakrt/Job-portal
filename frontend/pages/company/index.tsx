import Layout from "../../components/Layout";
import Link from "next/link";

export default function CompanyDashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Dashboard Entreprise</h1>
      <Link href="/company/post-job" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Publier une offre
      </Link>
    </Layout>
  );
}
