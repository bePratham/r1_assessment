import { Fragment, useState } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { doSignOut } from '../../firebase/auth'

const navigation = [
  { name: 'image', href: '#', current: true,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyB6dtgmSOJIc1Qnx24U-T-lGrI8bN8fxGstQlm3sm7bkWXHTdgI8DBui3hj41yAuFAZc&usqp=CAU" },
  { name: 'Team', href: '#', current: false,img:"https://w7.pngwing.com/pngs/176/67/png-transparent-person-logo-people-travel-text-rectangle-logo-thumbnail.png" },
  { name: 'Projects', href: '#', current: false,img:"https://cdn.vectorstock.com/i/preview-1x/73/79/analysis-stock-market-black-icon-on-white-vector-31617379.jpg" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [selectedItem, setSelectedItem] = useState(navigation.find((item) => item.current)?.name || '');
  return (
    <Disclosure as="nav" className="bg-blue-800 w-20 h-screen flex flex-col">
    {({ open }) => (
      <>
          <div className="flex items-center justify-center">
          <img
            className="h-14 w-auto mt-4 mb-4"
            src="https://global-uploads.webflow.com/628202eb7980b612a999fc44/62ab4580a7221d718071030f_richpanel-logo.png"
            alt="Your Company"
          />
        </div>
        
        <div className="flex flex-col space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.name === selectedItem ? 'bg-white text-black' : item.current ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
              onClick={() => setSelectedItem(item.name)}
            >
              <img src={item.img} alt="" />
            </a>
          ))}
        </div>

        <div className="flex items-end justify-center mt-auto">
                  
                <Menu as="div" className="relative ml-3">
                  <div className='flex justify-center'>
                    <Menu.Button className="relative bottom-2 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-12 bottom-0 w-28 origin-top-left rounded-md
                     bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 
                     focus:outline-none">
                      <div>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={doSignOut}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-white text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => setSelectedItem(item.name)}
                >
                  {item.name}
                 
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}   