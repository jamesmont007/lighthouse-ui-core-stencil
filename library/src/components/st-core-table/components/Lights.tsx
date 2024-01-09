import { FunctionalComponent } from '@stencil/core';
import { h } from '@stencil/core/internal';

export const lightsValidation = (id, data) => {
  let available;
  let requires;
  if (id === 'profilesAvailable') {
    available = data.profilesAvailable;
    requires = data.profilesRequired;
  } else if (id === 'technicalAvailable') {
    available = data.technicalAvailable;
    requires = data.technicalRequired;
  } else {
    return;
  }
  return { available, requires };
};

export const lightsColor = (available, requires) => {
  const requiresPlus = requires * 1.5;
  let color = 'red';
  if (available > requiresPlus) {
    color = 'green';
  } else if (requires <= available && available <= requiresPlus) {
    color = 'yellow';
  }
  return color;
};

interface LightsProps {
  id: string;
  data: any;
}

export const Lights: FunctionalComponent<LightsProps> = (id, data) => {
  const response = lightsValidation(id, data);
  if (!response) return;
  return (
    <span
      class={`circle-lights ${lightsColor(
        response.available,
        response.requires
      )}`}
    />
  );
};
