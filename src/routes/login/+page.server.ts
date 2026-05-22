import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        // ตรวจสอบเงื่อนไข
        if (username === 'admin' && password === '1234') {
            // ถ้าสำเร็จ ให้เปลี่ยนหน้าไปที่ /main
            throw redirect(303, '/main');
        }

        // ถ้าไม่สำเร็จ ให้ส่งกลับไปพร้อม Error Message
        return fail(400, { username, error: 'Invalid username or password' });
    }
};