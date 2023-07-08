'use clients'

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ClipLoader } from 'react-spinners'

const LoadingModal = () => {
	return (
		<Transition.Root show as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={() => {}}></Dialog>
		</Transition.Root>
	)
}
