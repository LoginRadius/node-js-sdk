[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / WorkflowsApiFp

# Function: WorkflowsApiFp()

> **WorkflowsApiFp**(`configuration?`): `object`

WorkflowsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### addWorkflow()

> **addWorkflow**(`addWorkflowConfig`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>\>

Adds a new workflow configuration to the Tenant.

#### Parameters

##### addWorkflowConfig

[`AddWorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/AddWorkflowConfig.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>\>

#### Throws

### deleteWorkflow()

> **deleteWorkflow**(`workflowId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes an existing Workflow from the system.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### deleteWorkflowVersion()

> **deleteWorkflowVersion**(`workflowId`, `version`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Deletes a specific version of a Workflow from the system.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### version

`string`

The version identifier to delete.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### getAllWorkflows()

> **getAllWorkflows**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllWorkflows200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllWorkflows200Response.md)\>\>

Retrieves a list of all workflows configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllWorkflows200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllWorkflows200Response.md)\>\>

#### Throws

### getAllWorkflowVersionList()

> **getAllWorkflowVersionList**(`workflowId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`VersionListResponse`](../loginradius-sdk/namespaces/Models/interfaces/VersionListResponse.md)\>\>

Returns a list of all available versions for a specified Workflow.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`VersionListResponse`](../loginradius-sdk/namespaces/Models/interfaces/VersionListResponse.md)\>\>

#### Throws

### getWorkflowById()

> **getWorkflowById**(`workflowId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>\>

Retrieves details of a specific Workflow using its unique identifier.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>\>

#### Throws

### restoreWorkflowVersion()

> **restoreWorkflowVersion**(`workflowId`, `version`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RestoreWorkflowVersion200Response`](../loginradius-sdk/namespaces/Models/interfaces/RestoreWorkflowVersion200Response.md)\>\>

Restores a specific version of a Workflow to its active state.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### version

`string`

The version identifier to delete.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RestoreWorkflowVersion200Response`](../loginradius-sdk/namespaces/Models/interfaces/RestoreWorkflowVersion200Response.md)\>\>

#### Throws

### updateWorkflow()

> **updateWorkflow**(`workflowId`, `updateWorkflowConfig`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>\>

Updates the configuration of an existing Workflow.

#### Parameters

##### workflowId

`string`

The ID of the workflow.

##### updateWorkflowConfig

[`UpdateWorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/UpdateWorkflowConfig.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>\>

#### Throws

## Export
