// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import * as ms from "@microsoft/teams-js";
import { createTestingPinia, TestingPinia } from "@pinia/testing";
import crypto from "crypto";
import { StateTree } from "pinia";
import { vi } from "vitest";

Object.defineProperty(global, "crypto", {
	value: crypto.webcrypto,
});

window.HTMLElement.prototype.scrollTo = function () {
	// no-op
};

window.ResizeObserver =
	window.ResizeObserver ??
	vi.fn().mockImplementation(() => ({
		disconnect: vi.fn(),
		observe: vi.fn(),
		unobserve: vi.fn(),
	}));

export const myUserId = "my test user id";

export function createTestPiniaWithState(state?: StateTree): TestingPinia {
	return createTestingPinia({
		initialState: state,
		stubActions: false,
		fakeApp: false,
	});
}

/**
 *
 * Async configuration of the main instance with mocked DB and accessible state
 *
 * Use as `setup().promise.then()`
 */
export function setup(ignoreMS: boolean = true): Promise<void> {
	// set up mock MS state
	if (ignoreMS) {
		ms.app.initialize = vi.fn();
		ms.app.getContext = vi.fn();
		ms.app.registerOnThemeChangeHandler = vi.fn();
	}
	return Promise.resolve();
}
// Mon Feb 19 19:04:50 UTC 2024
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
// Tue Mar  5 08:25:59 UTC 2024
// Tue Mar 12 08:25:46 UTC 2024
// Tue Mar 19 08:25:47 UTC 2024
// Tue Mar 26 08:26:19 UTC 2024
// Tue Apr  2 08:26:13 UTC 2024
// Tue Apr  9 08:26:05 UTC 2024
// Tue Apr 16 08:26:14 UTC 2024
