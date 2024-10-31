"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { FaChartPie, FaChevronDown, FaPlayCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  HiCursorArrowRays,
  HiOutlineSquaresPlus,
  HiArrowPath,
  HiBars3,
} from "react-icons/hi2";
import { RiFingerprintLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";

const features = [
  {
    name: "Staking",
    description: "Get a better understanding of your traffic",
    href: "staking",
    icon: FaChartPie,
  },
  {
    name: "Farming",
    description: "Speak directly to your customers",
    href: "#",
    icon: HiCursorArrowRays,
  },
  {
    name: "NFT",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: RiFingerprintLine,
  },
  {
    name: "Harvest",
    description: "Connect with third-party tools",
    href: "#",
    icon: HiOutlineSquaresPlus,
  },
  {
    name: "Community",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: HiArrowPath,
  },
];
const callsToAction = [
  { name: "Watch", href: "#", icon: FaPlayCircle },
  { name: "Contact us", href: "#", icon: FaPhone },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/home" className="-m-1.5 p-1.5 ">
            <span className="sr-only">NanoBillionaires.com</span>
            <img alt="" src="/nano.svg" className="h-4 w-auto dark:invert" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3 aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white-900">
              Features
              <FaChevronDown
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-700 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {features.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-500"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-400 group-hover:bg-gray-500">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-green-900"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-500">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-400"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-green-900"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="/home/partnership"
            className="text-sm font-semibold leading-6 text-white-900"
          >
            Partnerships
          </a>
          <a
            href="/home/referral"
            className="text-sm font-semibold leading-6 text-white-900"
          >
            Referral
          </a>
          <a
            href="/home/history"
            className="text-sm font-semibold leading-6 text-white-900"
          >
            History
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <button onClick={() => setShowConnect(true)}>
            Connect Wallet <span aria-hidden="true">&rarr;</span>
          </button> */}
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white-900"
          >
            Connect Wallet <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">NanoBillionaires.com</span>
              <img alt="" src="/logo.jpg" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <FaXmark aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Features
                    <FaChevronDown
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...features, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/home/partnership"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Partnerships
                </a>
                <a
                  href="/home/referral"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Referral
                </a>
                <a
                  href="/home/history"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  History
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Connect Wallet
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>{" "}
    </>
  );
}
