import { Contact } from "lucide-react";


// carbonioform
export const contactusform = async (data) => {
  const response = await fetch('/api/carbonioform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// Home Contact

export const Homecontactusform = async (data) => {
  const response = await fetch('/api/homecontactform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};


// cloud form


export const Cloudcontactusform = async (data) => {
  const response = await fetch('/api/cloudform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};



export const SpamfilterContactusform = async (data) => {
  const response = await fetch('/api/spamform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};



export const SSlContactusform = async (data) => {
  const response = await fetch('/api/sslform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};


export const Contactusform1 = async (data) => {
  const response = await fetch('/api/homecontactform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};



// utils/sendPlanEmail.js
export const sendPlanEmail = async (planData) => {
  const res = await fetch('/api/plan-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(planData),
  });

  if (!res.ok) {
    throw new Error('Failed to send plan email');
  }

  return await res.json();
};
