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

import { set } from 'lodash'
import React from 'react'
import { observer } from 'mobx-react'
import { Form } from '@kube-design/components'
import PipelineTemplate from 'pages/devops/components/Pipeline/PipelineTemplate'
import style from './index.scss'

@observer
export default class AdvanceSettings extends React.Component {
  handleTemplateChange = (value, params) => {
    set(this.props.formTemplate, 'template', value)
    set(this.props.formTemplate, 'params', params)
  }

  render() {
    const { formRef, formTemplate } = this.props

    return (
      <Form
        data={formTemplate}
        ref={formRef}
        className={style.pipeline_template_form}
      >
        <Form.Item
          name="template"
          rules={[{ required: true, message: t('PIPELINE_VALIDATOR_DESC') }]}
        >
          <PipelineTemplate
            name="template"
            templateLoading={false}
            handleTemplateChange={this.handleTemplateChange}
            formTemplate={formTemplate}
          />
        </Form.Item>
      </Form>
    )
  }
}
