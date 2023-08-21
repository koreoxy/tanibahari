import Image from 'next/image';
import React from 'react';
import Icon from '@mdi/react';
import { mdiInformation, mdiCartPlus } from '@mdi/js';
import Link from 'next/link';
import data from '@/utils/data';

export default function CardProduct() {
  return (
    <div className="container min-w-full min-h-full bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90%">
      <div className="flex justify-between pt-3">
        <Image
          className="w-auto"
          src="/assets/images/flash-sale.png"
          width={200}
          height={200}
          alt="flash sale"
        />
        <button className="bg-[#FAFF00] text-[#0F9062] w-[126px] h-[38px] rounded-md m-3">
          Lihat Semua
        </button>
      </div>
      <div className="flex gap-2 -mx-5 overflow-x-scroll md:overflow-x-hidden  snap-x py-5 rounded-md drop-shadow-xl min-[640px]:justify-center">
        {data.product.map((product, i) => (
          <div
            className="w-64 bg-gray-100 px-3 py-3 rounded-lg drop-shadow-md relative"
            key={i}
          >
            <div className="">
              <Image
                className="w-full"
                src={product.image}
                width={200}
                height={200}
                alt={product.slug}
              />
            </div>
            <div className="pt-2">
              <h1 className="text-[#0F9062] font-bold max-[640px]:text-sm">
                {product.name}
              </h1>
            </div>

            <div className="pt-2">
              <h3 className="text-[#FB8200] font-bold max-[640px]:text-sm">
                {product.category}
              </h3>
              <p className="text-[#A3A3A3] font-bold line-through max-[640px]:text-sm">
                {product.discount}
              </p>
              <p className="text-[#1AC41F] font-bold text-[24px] max-[640px]:text-[19px]">
                {product.price}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Link href={`product-detail/${product.slug}`}>
                <div className="bg-[#156C99] w-full rounded-xl p-1 text-white text-sm font-bold flex gap-1 max-[640px]:text-[12px] items-center">
                  <Icon path={mdiInformation} size={1} />
                  Lihat Detail
                </div>
              </Link>

              <Link href={'/product/slug'}>
                <div className="bg-[#0F9062] w-full rounded-xl p-1 font-bold text-[#FAFF00] text-sm flex gap-1 max-[640px]:text-sm items-center">
                  <Icon path={mdiCartPlus} size={1} className="text-white" />
                  Masukan Keranjang
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
