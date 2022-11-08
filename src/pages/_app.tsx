import { useEffect, useRef } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import '@/styles/globals.css';

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();
  const countRef = useRef(`up`);
  countRef.current = scroll?.el?.dataset?.direction;

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;

      scroll.on(`scroll`, ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        },

        scrollLeft(value) {
          return arguments.length ? scroll.scrollLeft(value, 0, 0) : scroll.scroll.instance.scroll.x;
        },

        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element.style.transform ? `transform` : `fixed`,
      });
    }
    return () => {
      ScrollTrigger.addEventListener(`refresh`, () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  interface ScrollProps {
    direction: string;
    scroll: {
      y: number;
    };
  }

  useEffect(() => {
    scroll?.on(`scroll`, ({ direction, scroll: scrollAttr }: ScrollProps) => {
      if (scrollAttr.y > 100) {
        if (countRef.current != direction) {
          scroll.el.setAttribute(`data-direction`, direction);
          countRef.current = direction;
        }
      }

      const root = document.documentElement;
      if (scrollAttr.y > 200 && scrollAttr.y < 1200) {
        root.style.setProperty(`--background-color`, `black`);
        root.style.setProperty(`--color`, `white`);
      } else if (scrollAttr.y > 1200) {
        root.style.setProperty(`--background-color`, `black`);
        root.style.setProperty(`--color`, `white`);
      } else {
        root.style.setProperty(`--background-color`, `#000097`);
        root.style.setProperty(`--color`, `white`);
      }
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [scroll]);

  return null;
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
        getDirection: true,
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      location={asPath}
      containerRef={scrollRef}
      // onLocationChange={(scroll) => {
      //   // Reset scroll top to 0
      //   scroll.scrollTo(0, { duration: 0, disableLerp: true });
      //   // Show navbar on new page
      //   scroll.el.setAttribute(`data-direction`, `up`);
      // }}
      // onUpdate={() => console.log('Updated, but not on location change!')}
      scroll={() => ScrollTrigger.update}
    >
      <ScrollTriggerProxy />
      <div id="scrollContainer" data-scroll-container ref={scrollRef}>
        <Component {...pageProps} />
      </div>
    </LocomotiveScrollProvider>
  );
}
