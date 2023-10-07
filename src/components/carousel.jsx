import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full flex items-center justify-center text-5xl leading-tight font-bold text-brand-light/90 rounded-3xl bg-brand-light/5 !py-14 cursor-pointer select-none"
      >
        <SwiperSlide className="px-12">
          <p className="">“Your frontend development skills are truly exceptional. Your designs are not just creative; they're uniquely captivating. You've transformed our online presence, and we're thrilled with the results. Thank you for your outstanding work!”</p>
          <div className="flex items-center justify-start mt-12 gap-x-8">
            <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ee/ee3077674c0714d534080dac9afad3a3e80926bb_full.jpg" alt="" className="rounded-full aspect-square w-24 saturate-0" />
            <div className="flex flex-col items-start justify-center">
              <p className="text-4xl">Evan You</p>
              <p className="text-xl text-brand-light/50 font-semibold">ViteJS</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-12">
          <p className="">“Your frontend development skills are truly exceptional. Your designs are not just creative; they're uniquely captivating. You've transformed our online presence, and we're thrilled with the results. Thank you for your outstanding work!”</p>
          <div className="flex items-center justify-start mt-12 gap-x-8">
            <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ee/ee3077674c0714d534080dac9afad3a3e80926bb_full.jpg" alt="" className="rounded-full aspect-square w-24 saturate-0" />
            <div className="flex flex-col items-start justify-center">
              <p className="text-4xl">Evan You</p>
              <p className="text-xl text-brand-light/50 font-semibold">ViteJS</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-12">
          <p className="">“Your frontend development skills are truly exceptional. Your designs are not just creative; they're uniquely captivating. You've transformed our online presence, and we're thrilled with the results. Thank you for your outstanding work!”</p>
          <div className="flex items-center justify-start mt-12 gap-x-8">
            <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ee/ee3077674c0714d534080dac9afad3a3e80926bb_full.jpg" alt="" className="rounded-full aspect-square w-24 saturate-0" />
            <div className="flex flex-col items-start justify-center">
              <p className="text-4xl">Evan You</p>
              <p className="text-xl text-brand-light/50 font-semibold">ViteJS</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}