[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / WorkflowsApiAxiosParamCreator

# Function: WorkflowsApiAxiosParamCreator()

> **WorkflowsApiAxiosParamCreator**(`configuration?`): `object`

WorkflowsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### addWorkflow

> **addWorkflow**: (`addWorkflowConfig`, `options?`) => `Promise`\<`RequestArgs`\>

Adds a new workflow configuration to the Tenant.

#### Parameters

##### addWorkflowConfig

[`AddWorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/AddWorkflowConfig.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteWorkflow

> **deleteWorkflow**: (`workflowId`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes an existing Workflow from the system.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteWorkflowVersion

> **deleteWorkflowVersion**: (`workflowId`, `version`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes a specific version of a Workflow from the system.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### version

`string`

The version identifier to delete.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllWorkflows

> **getAllWorkflows**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all workflows configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllWorkflowVersionList

> **getAllWorkflowVersionList**: (`workflowId`, `options?`) => `Promise`\<`RequestArgs`\>

Returns a list of all available versions for a specified Workflow.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getWorkflowById

> **getWorkflowById**: (`workflowId`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves details of a specific Workflow using its unique identifier.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### restoreWorkflowVersion

> **restoreWorkflowVersion**: (`workflowId`, `version`, `options?`) => `Promise`\<`RequestArgs`\>

Restores a specific version of a Workflow to its active state.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### version

`string`

The version identifier to delete.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateWorkflow

> **updateWorkflow**: (`workflowId`, `updateWorkflowConfig`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the configuration of an existing Workflow.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### updateWorkflowConfig

[`UpdateWorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/UpdateWorkflowConfig.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
