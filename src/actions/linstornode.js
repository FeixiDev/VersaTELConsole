/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Notify } from '@kube-design/components'
import { Modal } from 'components/Base'

import CreateModal from 'components/Modals/LNodeCreate'
import FORM_TEMPLATES from 'utils/form.templates'

export default {
  'linstornodes.create': {
    on({ store, cluster, namespace, workspace, success, devops, ...props }) {
      const { module } = store
      const modal = Modal.open({
        onOk: data => {
          if (!data) {
            Modal.close(modal)
            return
          }

          // if (devops) {
          //   data.metadata.namespace = devops
          // }

          // store.create(data)

          store.create(data).then(res => {
            // Modal.close(modal)

            if (Array.isArray(res)) {
              Notify.error({
                content: `${t('Created Failed, Reason:')}${res[0].message}`,
              })
            } else {
              Notify.success({ content: `${t('Created Successfully')}` })
            }
            success && success()
          })
          Modal.close(modal)
        },
        modal: CreateModal,
        store,
        module,
        cluster,
        namespace,
        workspace,
        formTemplate: FORM_TEMPLATES[module]({ namespace }),
        ...props,
      })
    },
  },
}
