import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/accounts/publicsquare-accounts-api",
    },
    {
      type: "category",
      label: "Accounts",
      link: {
        type: "doc",
        id: "api/accounts/accounts",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-account-invitations",
          label: "Get all account invitations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-account-invitation",
          label: "Create account invitation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/resend-account-invitation",
          label: "Resend account invitation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/delete-account-invitation",
          label: "Delete account invitation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-account-members",
          label: "Get all account members",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/delete-account-member",
          label: "Delete account member",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/accounts/update-account-member",
          label: "Update account member",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-accounts",
          label: "Get all accounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-account",
          label: "Create account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-account",
          label: "Get account",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-account",
          label: "Update account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-account",
          label: "Delete account",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/accounts/get-seller-accounts",
          label: "Get seller accounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-managed-account",
          label: "Create managed account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-managed-accounts",
          label: "Get managed accounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-account-permissions",
          label: "Get account permissions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/add-product",
          label: "Add product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-account-branding",
          label: "Get account branding",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-account-branding",
          label: "Update account branding",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-account-settings",
          label: "Get all account settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/request-account-setting-access",
          label: "Request account setting access",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-account-types",
          label: "Get all account types",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Business",
      link: {
        type: "doc",
        id: "api/accounts/business",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-business",
          label: "Get business",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-business",
          label: "Save business",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/get-business-ach-information",
          label: "Get business ACH information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-business-ach-information",
          label: "Save business ACH information",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/get-business-card-information",
          label: "Get business card information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-business-card-information",
          label: "Save business card information",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/get-business-fulfillment-information",
          label: "Get business fulfillment information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-business-fulfillment-information",
          label: "Save business fulfillment information",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-business-structures",
          label: "Get all business structures",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-business-types",
          label: "Get all business types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-countries",
          label: "Get all countries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-business-firearms-questionnaire",
          label: "Get business firearms questionnaire",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-business-firearms-questionnaire",
          label: "Save business firearms questionnaire",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/get-business-pharmaceutical-questionnaire",
          label: "Get business pharmaceutical questionnaire",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-business-pharmaceutical-questionnaire",
          label: "Save business pharmaceutical questionnaire",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Contracts",
      link: {
        type: "doc",
        id: "api/accounts/contracts",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-latest-product-contract",
          label: "Get latest product contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-contract-by-id",
          label: "Get contract by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-contract",
          label: "Create contract",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Customers",
      link: {
        type: "doc",
        id: "api/accounts/customers",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-customers",
          label: "Get all customers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-customer",
          label: "Create customer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-customer-by-id",
          label: "Get customer by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-customer",
          label: "Update customer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-customer",
          label: "Delete customer",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Events",
      link: {
        type: "doc",
        id: "api/accounts/events",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-events",
          label: "Get all events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-event-by-id",
          label: "Get event by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-event-types",
          label: "Get all event types",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Onboarding",
      link: {
        type: "doc",
        id: "api/accounts/onboarding",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/review-onboarding",
          label: "Review onboarding",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/onboard",
          label: "Onboard",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Products",
      link: {
        type: "doc",
        id: "api/accounts/products",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-credit-product-lines",
          label: "Get all credit product lines",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-products",
          label: "Get all products",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Roles",
      link: {
        type: "doc",
        id: "api/accounts/roles",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-account-roles",
          label: "Get all account roles",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      link: {
        type: "doc",
        id: "api/accounts/webhooks",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-webhook-events",
          label: "Get all webhook events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-webhook-event-by-id",
          label: "Get webhook event by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/requeue-a-webhook-event-by-id",
          label: "Requeue a webhook event by ID",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-webhooks",
          label: "Get all webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-webhook",
          label: "Create webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-webhook-by-id",
          label: "Get webhook by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-webhook",
          label: "Update webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-webhook",
          label: "Delete webhook",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "API Keys",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-api-keys",
          label: "Get all API keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-api-key",
          label: "Create API key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-api-key-by-id",
          label: "Get API key by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-api-key",
          label: "Update API key",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-api-key",
          label: "Delete API key",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/accounts/reveal-api-key",
          label: "Reveal API key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/regenerate-api-key",
          label: "Regenerate API key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-api-key-types",
          label: "Get all API key types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-permissions",
          label: "Get all permissions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Business Bank Account",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-bank-account-holder-types",
          label: "Get all bank account holder types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-bank-account-statuses",
          label: "Get all bank account statuses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-bank-account-types",
          label: "Get all bank account types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-bank-account",
          label: "Get bank account",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-bank-account",
          label: "Save bank account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/get-bank-verification-url",
          label: "Get bank verification URL",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-bank-verification",
          label: "Save bank verification",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Business Credit Information",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-credit-information",
          label: "Get credit information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-credit-information",
          label: "Save credit information",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Business Directors",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-directors",
          label: "Get all directors",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-director",
          label: "Create director",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-director-by-id",
          label: "Get director by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-director",
          label: "Update director",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-director",
          label: "Delete director",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Business Documents",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-business-documents",
          label: "Get all business documents",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/upload-business-document",
          label: "Upload business document",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-business-document-by-id",
          label: "Get business document by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/delete-business-document",
          label: "Delete business document",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-business-document-types",
          label: "Get all business document types",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Business Tax Information",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-business-industries",
          label: "Get all business industries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-tax-information",
          label: "Get tax information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-tax-information",
          label: "Save tax information",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Business Representative",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-business-representative",
          label: "Get business representative",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-business-representative",
          label: "Save business representative",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/copy-business-representative-as-owner",
          label: "Copy business representative as owner",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Business Shareholders",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-shareholders",
          label: "Get all shareholders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-shareholder",
          label: "Create shareholder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-shareholder-by-id",
          label: "Get shareholder by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-shareholder",
          label: "Update shareholder",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-shareholder",
          label: "Delete shareholder",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Business Ultimate Beneficial Owners",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-ultimate-beneficial-owners",
          label: "Get all ultimate beneficial owners",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-ultimate-beneficial-owner",
          label: "Create ultimate beneficial owner",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-ultimate-beneficial-owner-by-id",
          label: "Get ultimate beneficial owner by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-ultimate-beneficial-owner",
          label: "Update ultimate beneficial owner",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-ultimate-beneficial-owner",
          label: "Delete ultimate beneficial owner",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Holding Accounts",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-holding-accounts",
          label: "Get all holding accounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-holding-account-by-id",
          label: "Get holding account by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-holding-account-balance-by-id",
          label: "Get holding account balance by ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Onboarding Invitations",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-onboarding-invitations",
          label: "Get all onboarding invitations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-onboarding-invitation",
          label: "Create onboarding invitation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-onboarding-invitation-by-id",
          label: "Get onboarding invitation by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-onboarding-invitation",
          label: "Update onboarding invitation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-onboarding-invitation",
          label: "Delete onboarding invitation",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
