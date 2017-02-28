import {
  WIDGET_CREATING,
  WIDGET_CREATE_SUCCESS,
  WIDGET_CREATE_ERROR,
  WIDGET_REQUESTING,
  WIDGET_REQUEST_SUCCESS,
  WIDGET_REQUEST_ERROR,
} from './constants'

export const widgetCreate = function widgetCreate (client, widget) {
  return {
    type: WIDGET_CREATING,
    client,
    widget,
  }
}

export const widgetCreateSuccess = function widgetCreateSuccess (widget) {
  return {
    type: WIDGET_CREATE_SUCCESS,
    widget,
  }
}

export const widgetCreateError = function widgetCreateError (error) {
  return {
    type: WIDGET_CREATE_ERROR,
    error,
  }
}

export const widgetRequest = function widgetRequest (client) {
  return {
    type: WIDGET_REQUESTING,
    client,
  }
}

export const widgetRequestSuccess = function widgetRequestSuccess (widgets) {
  return {
    type: WIDGET_REQUEST_SUCCESS,
    widgets,
  }
}

export const widgetRequestError = function widgetRequestError (error) {
  return {
    type: WIDGET_REQUEST_ERROR,
    error,
  }
}
