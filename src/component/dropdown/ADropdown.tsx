import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {mainContext} from '../../i18n/i18n'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function ADropdown() {

  const context:any = useContext(mainContext);

  return (

    // <select onChange={context.selectLang} value={context.locale}>

    //   <option value="en-EN">English</option>
    //   <option value="de-DE">Deutsch</option>
    //   <option value="ar-AR">Arabic</option>
    // </select>

    <Menu onChange={context.selectLang}  as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          {/* <div className="grid grid-cols-2 gap-1 items-center"> */}
           {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 5 3"><path d="M0 0h5v3H0z"/><path fill="#D00" d="M0 1h5v2H0z"/><path fill="#FFCE00" d="M0 2h5v1H0z"/></svg> */}
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
          {/* </div> */}
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
        <Menu.Items className="origin-top-right absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item >
              {({ active }) => (
                <option value="ar-AR" onClick={context.selectLang}
                  // href="ar_AR/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-lg font-dosis text-black cursor-pointer'
                  )}
                >
                 العربية - AR
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option value="en-EN" onClick={context.selectLang}
                  // href="en_EN/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-lg font-dosis text-black cursor-pointer'
                  )}
                >
                   English - EN
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option value="de-DE" onClick={context.selectLang}
                  // href="de_DE/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-lg font-dosis text-black cursor-pointer'
                  )}
                >
                  Deutsch - DE
                </option>
              )}
            </Menu.Item>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

