var fs = require('fs');

/**
 * This file exports the content of your website, as a bunch of concatenated
 * Markdown files. By doing this explicitly, you can control the order
 * of content without any level of abstraction.
 *
 * Using the brfs module, fs.readFileSync calls in this file are translated
 * into strings of those files' content before the file is delivered to a
 * browser: the content is read ahead-of-time and included in bundle.js.
 */
module.exports =
  '# Introduction\n' +
  fs.readFileSync('./content/introduction.md', 'utf8') + '\n' +
  '# Telehealth\n' +
  fs.readFileSync('./content/telehealth.md', 'utf8') + '\n' +
  '# Payment\n' +
  fs.readFileSync('./content/payment.md', 'utf8') + '\n' +
  '# Health Record\n' +
  fs.readFileSync('./content/healthRecord.md', 'utf8') + '\n' +
  '# Notes\n' +
  fs.readFileSync('./content/notes.md', 'utf8') + '\n' +
  '# Surveys\n' +
  fs.readFileSync('./content/surveys.md', 'utf8') + '\n' +
  '# Groups\n' +
  fs.readFileSync('./content/groups.md', 'utf8') + '\n' +
  '# Educational Content\n' +
  fs.readFileSync('./content/educationalContent.md', 'utf8') + '\n' +
  '# Notifications\n' +
  fs.readFileSync('./content/notifications.md', 'utf8') + '\n' +
  '# Prescriptions\n' +
  fs.readFileSync('./content/prescriptions.md', 'utf8') + '\n' +
  '# General\n' +
  fs.readFileSync('./content/general.md', 'utf8') + '\n';
