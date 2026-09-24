[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / WorkflowsApiFactory

# Function: WorkflowsApiFactory()

> **WorkflowsApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

WorkflowsApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### addWorkflow()

> **addWorkflow**(`requestParameters`, `options?`): `AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>

Adds a new workflow configuration to the Tenant.

#### Parameters

##### requestParameters

[`WorkflowsApiAddWorkflowRequest`](../interfaces/WorkflowsApiAddWorkflowRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>

#### Throws

### deleteWorkflow()

> **deleteWorkflow**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes an existing Workflow from the system.

#### Parameters

##### requestParameters

[`WorkflowsApiDeleteWorkflowRequest`](../interfaces/WorkflowsApiDeleteWorkflowRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### deleteWorkflowVersion()

> **deleteWorkflowVersion**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes a specific version of a Workflow from the system.

#### Parameters

##### requestParameters

[`WorkflowsApiDeleteWorkflowVersionRequest`](../interfaces/WorkflowsApiDeleteWorkflowVersionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### getAllWorkflows()

> **getAllWorkflows**(`options?`): `AxiosPromise`\<[`GetAllWorkflows200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllWorkflows200Response.md)\>

Retrieves a list of all workflows configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllWorkflows200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllWorkflows200Response.md)\>

#### Throws

### getAllWorkflowVersionList()

> **getAllWorkflowVersionList**(`requestParameters`, `options?`): `AxiosPromise`\<[`VersionListResponse`](../loginradius-sdk/namespaces/Models/interfaces/VersionListResponse.md)\>

Returns a list of all available versions for a specified Workflow.

#### Parameters

##### requestParameters

[`WorkflowsApiGetAllWorkflowVersionListRequest`](../interfaces/WorkflowsApiGetAllWorkflowVersionListRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`VersionListResponse`](../loginradius-sdk/namespaces/Models/interfaces/VersionListResponse.md)\>

#### Throws

### getWorkflowById()

> **getWorkflowById**(`requestParameters`, `options?`): `AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>

Retrieves details of a specific Workflow using its unique identifier.

#### Parameters

##### requestParameters

[`WorkflowsApiGetWorkflowByIdRequest`](../interfaces/WorkflowsApiGetWorkflowByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>

#### Throws

### restoreWorkflowVersion()

> **restoreWorkflowVersion**(`requestParameters`, `options?`): `AxiosPromise`\<[`RestoreWorkflowVersion200Response`](../loginradius-sdk/namespaces/Models/interfaces/RestoreWorkflowVersion200Response.md)\>

Restores a specific version of a Workflow to its active state.

#### Parameters

##### requestParameters

[`WorkflowsApiRestoreWorkflowVersionRequest`](../interfaces/WorkflowsApiRestoreWorkflowVersionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RestoreWorkflowVersion200Response`](../loginradius-sdk/namespaces/Models/interfaces/RestoreWorkflowVersion200Response.md)\>

#### Throws

### updateWorkflow()

> **updateWorkflow**(`requestParameters`, `options?`): `AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>

Updates the configuration of an existing Workflow.

#### Parameters

##### requestParameters

[`WorkflowsApiUpdateWorkflowRequest`](../interfaces/WorkflowsApiUpdateWorkflowRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md)\>

#### Throws

## Export
