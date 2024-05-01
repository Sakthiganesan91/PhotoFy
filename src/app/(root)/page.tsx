import { Collection } from "@/components/shared/Collection";
import { getAllImages } from "@/lib/actions/image.actions";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../../constants/index";
const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });
  return (
    <>
      <section className="home">
        <h1 className="home-heading">Unleash Your Creativity with PhotoFy</h1>
        <ul className="flex-center gap-20 w-full">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit bg-white p-4 rounded-full">
                <Image src={link.icon} height={24} width={24} alt="icon" />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
};

export default Home;
