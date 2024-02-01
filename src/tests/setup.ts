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
